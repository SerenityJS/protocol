import { VarInt, Packet, Serialize } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';
import { Gamemode } from '../enums';

@Packet(0x69, VarInt)
class SetDefaultGameType extends Encapsulated {
	@Serialize(VarInt) public gamemode!: Gamemode;
}

export { SetDefaultGameType };
