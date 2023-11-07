import { Packet, VarInt } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x98, VarInt)
class EmoteList extends Encapsulated {}

export { EmoteList };
