import { VarInt, Bool, Packet, Serialize } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x45, VarInt)
class CommandBlockUpdate extends Encapsulated {
	@Serialize(Bool) public isBlock!: boolean;
}

export { CommandBlockUpdate };
