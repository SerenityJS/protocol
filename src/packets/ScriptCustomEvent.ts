import { VarInt, LitString, Packet, Serialize } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x75, VarInt)
class ScriptCustomEvent extends Encapsulated {
	@Serialize(LitString) public eventName!: string;
	@Serialize(LitString) public data!: string;
}

export { ScriptCustomEvent };
