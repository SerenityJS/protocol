import { Packet, Serialize, VarInt, Bool, LitString } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0xa3, VarInt)
class ShowProfile extends Encapsulated {
	@Serialize(LitString) public text!: string;
	@Serialize(Bool) public fromServer!: boolean;
}

export { ShowProfile };
