import type { Endianness } from '@serenityjs/binarystream';
import { DataType } from '@serenityjs/raknet.js';
import type { Encapsulated } from '../Encapsulated';

enum MoveMode {
	Normal,
	Reset,
	Teleport,
	Rotation,
}

enum TeleportCause {
	Unknown,
	Projectile,
	ChorusFruit,
	Commands,
	Behaviors,
	Unknown2,
}

class MovementCause extends DataType {
	public static read(stream: Encapsulated, endian: Endianness, mode: MoveMode): TeleportCause | null {
		if (mode === MoveMode.Teleport) {
			return stream.readInt32(endian);
		} else {
			return null;
		}
	}
	public static write(stream: Encapsulated, value: number, endian: Endianness, mode: MoveMode): void {
		if (mode === MoveMode.Teleport) {
			stream.writeInt32(value, endian);
		}
	}
}

export { MovementCause, MoveMode, TeleportCause };
