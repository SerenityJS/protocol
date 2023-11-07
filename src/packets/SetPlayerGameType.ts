import { VarInt, Packet, Serialize } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';
import { Gamemode } from '../enums';

@Packet(0x3e, VarInt)
class SetPlayerGameType extends Encapsulated {
	@Serialize(VarInt) public gamemode!: Gamemode;
}

export { SetPlayerGameType };
