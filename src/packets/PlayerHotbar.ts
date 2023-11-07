import { Bool, Int8, VarInt, Packet, Serialize } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';
import { WindowId } from '../enums';

@Packet(0x30, VarInt)
class PlayerHotbar extends Encapsulated {
	@Serialize(VarInt) public selectedSlot!: number;
	@Serialize(Int8) public windowId!: WindowId;
	@Serialize(Bool) public selectSlot!: boolean;
}

export { PlayerHotbar };
