import { Endianness } from '@serenityjs/binarystream';
import { DataType } from '@serenityjs/raknet.js';
import type { Encapsulated } from '../Encapsulated';

interface Vec2f {
	x: number;
	z: number;
}

class Vector2f extends DataType {
	public static read(stream: Encapsulated): Vec2f {
		const x = stream.readFloat32(Endianness.Little);
		const z = stream.readFloat32(Endianness.Little);

		return { x, z };
	}
	public static write(stream: Encapsulated, value: Vec2f): void {
		stream.writeFloat32(value.x, Endianness.Little);
		stream.writeFloat32(value.z, Endianness.Little);
	}
}

export { Vector2f, type Vec2f };
