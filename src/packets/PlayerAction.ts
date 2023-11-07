import { Packet, Serialize, VarInt, VarLong, ZigZag } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';
import { Action } from '../enums';
import { BlockCoordinate, BlockCoordinates } from '../types';

@Packet(0x24, VarInt)
class PlayerAction extends Encapsulated {
	@Serialize(VarLong) public runtimeId!: bigint;
	@Serialize(ZigZag) public action!: Action;
	@Serialize(BlockCoordinates) public position!: BlockCoordinate;
	@Serialize(BlockCoordinates) public resultPosition!: BlockCoordinate;
	@Serialize(ZigZag) public face!: number;
}

export { PlayerAction };
