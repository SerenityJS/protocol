import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt, ZigZag, ZigZong } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x26, VarInt)
class HurtArmor extends Encapsulated {
	@Serialize(ZigZag) public cause!: number;
	@Serialize(ZigZag) public damage!: number;
	@Serialize(ZigZong) public armorSlots!: number;
}

export { HurtArmor };
