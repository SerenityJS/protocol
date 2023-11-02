import { Packet, Serialize } from '@serenityjs/raknet.js';
import { Bool, Int8, VarInt, ZigZong } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';
import { WindowID, WindowType } from '../enums';
import { BlockCoordinate, BlockCoordinates } from '../types';

@Packet(0x2f, VarInt)
class ContainerClose extends Encapsulated {
	@Serialize(Int8) public windowId!: WindowID;
	@Serialize(Bool) public server!: boolean;
}

export { ContainerClose };
