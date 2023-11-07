import { Endianness } from '@serenityjs/binarystream';
import { DataType } from '@serenityjs/raknet.js';
import type { Encapsulated } from '../Encapsulated';

interface Vec3f {
	x: number;
	y: number;
	z: number;
}

class Vector3f extends DataType {
	public static read(stream: Encapsulated): Vec3f {
		const x = stream.readFloat32(Endianness.Little);
		const y = stream.readFloat32(Endianness.Little);
		const z = stream.readFloat32(Endianness.Little);

		return { x, y, z };
	}
	public static write(stream: Encapsulated, value: Vec3f): void {
		stream.writeFloat32(value.x, Endianness.Little);
		stream.writeFloat32(value.y, Endianness.Little);
		stream.writeFloat32(value.z, Endianness.Little);
	}
}

export { Vector3f, type Vec3f };
