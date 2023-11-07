import { Endianness } from '@serenityjs/binarystream';
import { DataType } from '@serenityjs/raknet.js';
import type { Encapsulated } from '../Encapsulated';
import type { AbilityLayerType } from '../enums';
import { AbilityLayerFlag } from '../enums';

interface AbilityLayer {
	flags: AbilityFlag[];
	flySpeed: number;
	type: AbilityLayerType;
	walkSpeed: number;
}

interface AbilityFlag {
	flag: AbilityLayerFlag;
	value: boolean;
}

interface EncodedAbilityFlags {
	flagsHash: number;
	valuesHash: number;
}

class AbilityLayers extends DataType {
	public static read(stream: Encapsulated): AbilityLayer[] {
		const layers: AbilityLayer[] = [];
		const length = stream.readUint8();
		for (let i = 0; i < length; i++) {
			const type = stream.readShort(Endianness.Little);
			const flags = this.decodeFlags({
				flagsHash: stream.readUint32(Endianness.Little),
				valuesHash: stream.readUint32(Endianness.Little),
			});
			const flySpeed = stream.readFloat32(Endianness.Little);
			const walkSpeed = stream.readFloat32(Endianness.Little);

			layers.push({ type, flags, flySpeed, walkSpeed });
		}

		return layers;
	}
	public static write(stream: Encapsulated, value: AbilityLayer[]): void {
		stream.writeUint8(value.length);
		for (const layer of value) {
			stream.writeInt16(layer.type, Endianness.Little);
			const flags = this.encodeFlags(layer.flags);
			stream.writeUint32(flags.flagsHash, Endianness.Little);
			stream.writeUint32(flags.valuesHash, Endianness.Little);
			stream.writeFloat32(layer.flySpeed, Endianness.Little);
			stream.writeFloat32(layer.walkSpeed, Endianness.Little);
		}
	}

	public static encodeFlags(flags: AbilityFlag[]): EncodedAbilityFlags {
		let flagsHash = 0;
		let valuesHash = 0;
		for (const { flag, value } of flags) {
			flagsHash |= 1 << flag;

			if (flag === AbilityLayerFlag.WalkSpeed || flag === AbilityLayerFlag.FlySpeed) continue;
			valuesHash |= value ? 1 << flag : 0;
		}

		return {
			flagsHash,
			valuesHash,
		};
	}

	public static decodeFlags(encoded: EncodedAbilityFlags): AbilityFlag[] {
		const flags: AbilityFlag[] = [];
		for (const flag of Object.values(AbilityLayerFlag)) {
			if (flag === AbilityLayerFlag.WalkSpeed || flag === AbilityLayerFlag.FlySpeed) continue;
			flags.push({
				flag: flag as AbilityLayerFlag,
				value: (encoded.valuesHash & (1 << (flag as AbilityLayerFlag))) !== 0,
			});
		}

		return flags;
	}
}

export { AbilityLayers, type AbilityLayer, type AbilityFlag, type EncodedAbilityFlags };
