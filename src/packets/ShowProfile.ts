import { VarInt, LitString, Packet, Serialize } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x68, VarInt)
class ShowProfile extends Encapsulated {
	@Serialize(LitString) public xuid!: string;
}

export { ShowProfile };
