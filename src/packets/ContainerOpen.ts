import { Packet, Serialize, Int8, VarInt, ZigZong } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';
import { WindowId, WindowType } from '../enums';
import { BlockCoordinate, BlockCoordinates } from '../types';

@Packet(0x2e, VarInt)
class ContainerOpen extends Encapsulated {
	@Serialize(Int8) public windowId!: WindowId;
	@Serialize(Int8) public windowType!: WindowType;
	@Serialize(BlockCoordinates) public position!: BlockCoordinate;
	@Serialize(ZigZong) public targetRuntimeId!: bigint;
}

export { ContainerOpen };
