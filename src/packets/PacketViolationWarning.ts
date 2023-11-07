import { Packet, VarInt } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x9c, VarInt)
class PacketViolationWarning extends Encapsulated {}

export { PacketViolationWarning };
