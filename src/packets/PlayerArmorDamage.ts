import { VarInt, Packet } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x95, VarInt)
class PlayerArmorDamage extends Encapsulated {}

export { PlayerArmorDamage };
