import { VarInt, ZigZag, ZigZong, Packet, Serialize } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x26, VarInt)
class HurtArmor extends Encapsulated {
	@Serialize(ZigZag) public cause!: number;
	@Serialize(ZigZag) public damage!: number;
	@Serialize(ZigZong) public armorSlots!: number;
}

export { HurtArmor };
