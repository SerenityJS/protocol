import { Packet, VarInt } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x04, VarInt)
class ClientToServerHandshake extends Encapsulated {}

export { ClientToServerHandshake };
