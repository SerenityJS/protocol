import { VarInt, Int32, Packet, Serialize } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0xc1, VarInt)
class RequestNetworkSettings extends Encapsulated {
	@Serialize(Int32) public protocol!: number;
}

export { RequestNetworkSettings };
