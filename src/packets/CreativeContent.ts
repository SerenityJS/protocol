import { Packet, Serialize } from '@serenityjs/raknet.js';
import { VarInt } from 'binarystream.js';
import { Encapsulated } from '../Encapsulated';
import type { ItemOld } from '../types';
import { ItemsOld } from '../types';

@Packet(0x91, VarInt)
class CreativeContent extends Encapsulated {
	@Serialize(ItemsOld) public items!: ItemOld[];
}

export { CreativeContent };
