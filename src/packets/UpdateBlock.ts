import { Packet, Serialize } from '@serenityjs/raknet.js';
import { UInt8, VarInt } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';
import { BlockCoordinate, BlockCoordinates } from '../types';

@Packet(0x15, VarInt)
class UpdateBlock extends Encapsulated {
	@Serialize(BlockCoordinates) public position!: BlockCoordinate;
	@Serialize(VarInt) public blockRuntimeId!: number;
	@Serialize(VarInt) public flags!: number; // TODO: bitflags
	@Serialize(VarInt) public layer!: number;
}

export { UpdateBlock };
