import { DataType } from '@serenityjs/raknet.js';
import type { Encapsulated } from '../Encapsulated';

interface BlockCoordinate {
	x: number;
	y: number;
	z: number;
}

class BlockCoordinates extends DataType {
	public static read(stream: Encapsulated): BlockCoordinate {
		const x = stream.readZigZag();
		const y = stream.readVarInt();
		const z = stream.readZigZag();

		return { x, y, z };
	}
	public static write(stream: Encapsulated, value: BlockCoordinate): void {
		stream.writeZigZag(value.x);
		stream.writeVarInt(value.y);
		stream.writeZigZag(value.z);
	}
}

export { BlockCoordinates, type BlockCoordinate };
