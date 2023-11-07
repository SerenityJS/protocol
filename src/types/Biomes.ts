import type { Buffer } from 'node:buffer';
import { DataType } from '@serenityjs/raknet.js';
import type { Encapsulated } from '../Encapsulated';

class Biomes extends DataType {
	public static read(stream: Encapsulated): Buffer {
		return stream.readRemainingBuffer();
	}
	public static write(stream: Encapsulated, value: Buffer): void {
		stream.writeBuffer(value);
	}
}

export { Biomes };
