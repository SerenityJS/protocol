import { Bool, Int8, VarInt, Packet, Serialize } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';
import { WindowId } from '../enums';

@Packet(0x2f, VarInt)
class ContainerClose extends Encapsulated {
	@Serialize(Int8) public windowId!: WindowId;
	@Serialize(Bool) public server!: boolean;
}

export { ContainerClose };
