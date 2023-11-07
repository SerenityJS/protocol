import { VarInt, Packet } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x97, VarInt)
class UpdatePlayerGameType extends Encapsulated {}

export { UpdatePlayerGameType };
