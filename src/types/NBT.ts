import { DataType } from '@serenityjs/raknet.js';
import type { Encapsulated } from '../Encapsulated';

class NBT extends DataType {
	public static read(stream: Encapsulated): void {
		stream.readUint8();
		stream.readUint8();
		stream.readUint8();
	}
	public static write(stream: Encapsulated): void {
		stream.writeUint8(0x0a);
		stream.writeUint8(0x00);
		stream.writeUint8(0x00);
	}
}

export { NBT };
