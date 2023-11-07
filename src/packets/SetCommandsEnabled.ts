import { VarInt, Bool, Packet, Serialize } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x3b, VarInt)
class SetCommandsEnabled extends Encapsulated {
	@Serialize(Bool) public commandsEnabled!: boolean;
}

export { SetCommandsEnabled };
