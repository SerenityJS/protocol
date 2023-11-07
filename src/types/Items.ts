import { Buffer } from 'node:buffer';
import { Endianness } from '@serenityjs/binarystream';
import { DataType } from '@serenityjs/raknet.js';
import type { Encapsulated } from '../Encapsulated';
import { NBT } from './NBT';

// Still a WIP
// TODO:
//   - [ ] NBT
//   - [ ] blockingTick field in extra data only present on Shield item (could just ignore?)
//   - [ ] Better (Less repetative) implementation? Item is just ItemLegacy with two more fields
//   - [x] Strings with length prefix in Little Int16

interface IItemExtraData {
	blockingTick?: bigint;
	canDestroy: string[];
	canPlaceOn: string[];
	hasNbt: boolean;
	nbt?: {
		nbt: any;
		version: number;
	};
}

interface IItemLegacy {
	blockRuntimeId?: number;
	count?: number;
	extra?: IItemExtraData;
	metadata?: number;
	networkId: number;
}

interface IItem {
	blockRuntimeId?: number;
	count?: number;
	extra?: IItemExtraData;
	hasStackId?: boolean;
	metadata?: number;
	networkId: number;
	stackId?: number;
}

class ItemLegacy extends DataType {
	public static read(stream: Encapsulated): IItemLegacy {
		const networkId = stream.readZigZag();

		if (networkId === 0) return { networkId };

		const count = stream.readUint16(Endianness.Little);
		const metadata = stream.readVarInt();
		const blockRuntimeId = stream.readZigZag();

		const hasNbt = stream.readUint16(Endianness.Little) === 0xffff;
		let nbt:
			| {
					nbt: any;
					version: number;
			  }
			| undefined;
		if (hasNbt) {
			nbt = {
				version: stream.readUint8(),
				// TODO: NBT
				nbt: NBT.read(stream),
			};
		}

		const canPlaceOn: string[] = [];
		const placeLen = stream.readInt32(Endianness.Little);
		for (let i = 0; i < placeLen; i++) {
			// TODO: Read a string with an li16 length
			const strLen = stream.readInt16(Endianness.Little);
			const block = stream.readBuffer(strLen).toString('utf8');
			canPlaceOn.push(block);
		}

		const canDestroy: string[] = [];
		const destroyLen = stream.readInt32(Endianness.Little);
		for (let i = 0; i < destroyLen; i++) {
			// TODO: Read a string with an li16 length
			const strLen = stream.readInt16(Endianness.Little);
			const block = stream.readBuffer(strLen).toString('utf8');
			canDestroy.push(block);
		}

		// TODO: Extra data field "blockingTick" is only present if the
		// networkId is that of the shield item.

		// const blockingTick = stream.readInt64(Endianness.Little);

		return {
			networkId,
			count,
			metadata,
			blockRuntimeId,
			extra: {
				hasNbt,
				nbt,
				canPlaceOn,
				canDestroy,
			},
		};
	}

	public static write(stream: Encapsulated, value: IItemLegacy): void {
		stream.writeZigZag(value.networkId);
		if (value.networkId === 0) return;

		stream.writeUint16(value.count!, Endianness.Little);
		stream.writeVarInt(value.metadata!);
		stream.writeZigZag(value.blockRuntimeId!);

		stream.writeUint16(value.extra!.hasNbt ? 0xffff : 0, Endianness.Little);
		if (value.extra!.hasNbt) {
			stream.writeUint8(value.extra!.nbt!.version);
			// TODO: NBT
			// NBT.write(stream);
		}

		stream.writeInt32(value.extra!.canPlaceOn.length, Endianness.Little);
		for (const block of value.extra!.canPlaceOn) {
			// TODO: write string with li16 length
			stream.writeInt16(block.length, Endianness.Little);
			stream.writeBuffer(Buffer.from(block, 'utf8'));
		}

		stream.writeInt32(value.extra!.canDestroy.length, Endianness.Little);
		for (const block of value.extra!.canDestroy) {
			// TODO: write string with li16 length
			stream.writeInt16(block.length, Endianness.Little);
			stream.writeBuffer(Buffer.from(block, 'utf8'));
		}

		// TODO: Only write blockingTick if the ID is that of the Shield item
	}
}

class Item extends DataType {
	public static read(stream: Encapsulated): IItem {
		const networkId = stream.readZigZag();

		if (networkId === 0) return { networkId };

		const count = stream.readUint16(Endianness.Little);
		const metadata = stream.readVarInt();

		const hasStackId = stream.readBool();
		let stackId: number | undefined;
		if (hasStackId) {
			stackId = stream.readZigZag();
		}

		const blockRuntimeId = stream.readZigZag();

		const hasNbt = stream.readUint16(Endianness.Little) === 0xffff;
		let nbt:
			| {
					nbt: any;
					version: number;
			  }
			| undefined;
		if (hasNbt) {
			nbt = {
				version: stream.readUint8(),
				// TODO: NBT
				nbt: NBT.read(stream),
			};
		}

		const canPlaceOn: string[] = [];
		const placeLen = stream.readInt32(Endianness.Little);
		for (let i = 0; i < placeLen; i++) {
			// TODO: Read a string with an li16 length
			const strLen = stream.readInt16(Endianness.Little);
			const block = stream.readBuffer(strLen).toString('utf8');
			canPlaceOn.push(block);
		}

		const canDestroy: string[] = [];
		const destroyLen = stream.readInt32(Endianness.Little);
		for (let i = 0; i < destroyLen; i++) {
			// TODO: Read a string with an li16 length
			const strLen = stream.readInt16(Endianness.Little);
			const block = stream.readBuffer(strLen).toString('utf8');
			canDestroy.push(block);
		}

		// TODO: Extra data field "blockingTick" is only present if the
		// networkId is that of the shield item.

		// const blockingTick = stream.readInt64(Endianness.Little);

		return {
			networkId,
			count,
			metadata,
			hasStackId,
			stackId,
			blockRuntimeId,
			extra: {
				hasNbt,
				nbt,
				canPlaceOn,
				canDestroy,
			},
		};
	}

	public static write(stream: Encapsulated, value: IItem): void {
		stream.writeZigZag(value.networkId);
		if (value.networkId === 0) return;

		stream.writeUint16(value.count!, Endianness.Little);
		stream.writeVarInt(value.metadata!);
		stream.writeBool(value.hasStackId!);
		if (value.hasStackId) stream.writeZigZag(value.stackId!);
		stream.writeZigZag(value.blockRuntimeId!);

		stream.writeUint16(value.extra!.hasNbt ? 0xffff : 0, Endianness.Little);
		if (value.extra!.hasNbt) {
			stream.writeUint8(value.extra!.nbt!.version);
			// TODO: NBT
			// NBT.write(stream);
		}

		stream.writeInt32(value.extra!.canPlaceOn.length, Endianness.Little);
		for (const block of value.extra!.canPlaceOn) {
			// TODO: write string with li16 length
			stream.writeInt16(block.length, Endianness.Little);
			stream.writeBuffer(Buffer.from(block, 'utf8'));
		}

		stream.writeInt32(value.extra!.canDestroy.length, Endianness.Little);
		for (const block of value.extra!.canDestroy) {
			// TODO: write string with li16 length
			stream.writeInt16(block.length, Endianness.Little);
			stream.writeBuffer(Buffer.from(block, 'utf8'));
		}

		// TODO: Only write blockingTick if the ID is that of the Shield item
	}
}

export { Item, ItemLegacy, type IItem, type IItemLegacy };
