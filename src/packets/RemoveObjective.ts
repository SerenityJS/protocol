import { VarInt, LitString, Packet, Serialize } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x6a, VarInt)
class RemoveObjective extends Encapsulated {
	@Serialize(LitString) public objectiveId!: string;
}

export { RemoveObjective };
