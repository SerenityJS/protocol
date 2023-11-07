import { Packet, VarInt } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x96, VarInt)
class CodeBuilder extends Encapsulated {}

export { CodeBuilder };
