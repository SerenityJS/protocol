import { VarInt, Packet } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x4f, VarInt)
class CommandOutput extends Encapsulated {}

export { CommandOutput };
