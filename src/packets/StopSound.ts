import { VarInt, Bool, LitString, Packet, Serialize } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x57, VarInt)
class StopSound extends Encapsulated {
	@Serialize(LitString) public soundName!: string;
	@Serialize(Bool) public stoppingAllSounds!: boolean;
}

export { StopSound };
