import { VarInt, Packet } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x92, VarInt)
class PlayerEnchantOptions extends Encapsulated {}

export { PlayerEnchantOptions };
