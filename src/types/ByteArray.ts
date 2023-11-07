import type { Buffer } from 'node:buffer';
import { DataType } from '@serenityjs/raknet.js';
import type { Encapsulated } from '../Encapsulated';

class ByteArray extends DataType {
	public static read(stream: Encapsulated): Buffer {
		const length = stream.readVarInt();
		return stream.readBuffer(length);
	}
	public static write(stream: Encapsulated, value: Buffer): void {
		stream.writeVarInt(value.byteLength);
		stream.writeBuffer(value);
	}
}

export { ByteArray };
