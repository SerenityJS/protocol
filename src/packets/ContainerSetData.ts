import { Packet, Serialize } from '@serenityjs/raknet.js';
import { Int8, VarInt, ZigZag } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';
import { WindowId } from '../enums';

@Packet(0x33, VarInt)
class ContainerSetData extends Encapsulated {
	@Serialize(Int8) public windowId!: WindowId;
	// Different values depending on the window ID
	@Serialize(ZigZag) public property!: number;
	@Serialize(ZigZag) public value!: number;
}

export { ContainerSetData };
