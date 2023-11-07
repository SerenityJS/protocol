import { VarInt, Packet } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x94, VarInt)
class ItemStackResponse extends Encapsulated {}

export { ItemStackResponse };
