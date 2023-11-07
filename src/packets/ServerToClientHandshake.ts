import { VarInt, BigString, Packet, Serialize } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

// This packet is necessary to start encryption.
@Packet(0x03, VarInt)
class ServerToClientHandshake extends Encapsulated {
	@Serialize(BigString) public token!: string;
}

export { ServerToClientHandshake };
