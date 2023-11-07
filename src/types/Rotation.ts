import { DataType } from '@serenityjs/raknet.js';
import type { Encapsulated } from '../Encapsulated';

interface Rot {
	headYaw: number;
	pitch: number;
	yaw: number;
}

class Rotation extends DataType {
	public static read(stream: Encapsulated): Rot {
		const pitch = stream.readUint8();
		const yaw = stream.readUint8();
		const headYaw = stream.readUint8();

		return { pitch, yaw, headYaw };
	}
	public static write(stream: Encapsulated, value: Rot): void {
		stream.writeUint8(value.pitch);
		stream.writeUint8(value.yaw);
		stream.writeUint8(value.headYaw);
	}
}

export { Rotation, type Rot };
