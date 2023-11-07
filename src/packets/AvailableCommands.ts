import { Packet, VarInt } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x4c, VarInt)
class AvailableCommands extends Encapsulated {}

export { AvailableCommands };
