import { BinaryStream, Endianness } from '@serenityjs/binarystream';
import { DataType } from '@serenityjs/raknet.js';
import type { Encapsulated } from '../Encapsulated';

interface Experiment {
	enabled: boolean;
	name: string;
}

class Experiments extends DataType {
	public static read(stream: Encapsulated): Experiment[] {
		const packs: Experiment[] = [];
		const length = stream.readInt32(Endianness.Little);
		for (let i = 0; i < length; i++) {
			const name = stream.readBigString();
			const enabled = stream.readBool();
			packs.push({ enabled, name });
		}

		return packs;
	}
	public static write(stream: Encapsulated, value: Experiment[]): void {
		const buffer = new BinaryStream();
		buffer.writeInt32(value.length, Endianness.Little);
		for (const pack of value) {
			buffer.writeBigString(pack.name);
			buffer.writeBool(pack.enabled);
		}

		stream.writeBuffer(buffer.getBuffer());
	}
}

export { Experiments, type Experiment };
