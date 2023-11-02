import { DataType } from 'binarystream.js';
import type { Encapsulated } from '../Encapsulated';

interface Rot {
	headYaw: number;
	pitch: number;
	yaw: number;
}

class Rotation extends DataType {
	public static read(stream: Encapsulated): Rot {
		const pitch = stream.readUInt8();
		const yaw = stream.readUInt8();
		const headYaw = stream.readUInt8();

		return { pitch, yaw, headYaw };
	}
	public static write(stream: Encapsulated, value: Rot): void {
		stream.writeUInt8(value.pitch);
		stream.writeUInt8(value.yaw);
		stream.writeUInt8(value.headYaw);
	}
}

export { Rotation, type Rot };
