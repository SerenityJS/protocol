import { Packet, Serialize, VarInt, ZigZag } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';
import { BlockCoordinate, BlockCoordinates } from '../types';

@Packet(0x1a, VarInt)
class BlockEvent extends Encapsulated {
	@Serialize(BlockCoordinates) public position!: BlockCoordinate;
	@Serialize(ZigZag) public type!: number; // enum? 0 = Sound, 1 = ChangeState
	@Serialize(ZigZag) public data!: number;
}

export { BlockEvent };
