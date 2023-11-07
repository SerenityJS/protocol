import { VarInt, UInt8, Packet, Serialize } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';
import { ResourceStatus } from '../enums';
import { ResourcePackIds } from '../types';

@Packet(0x08, VarInt)
class ResourcePackClientResponse extends Encapsulated {
	@Serialize(UInt8) public status!: ResourceStatus;
	@Serialize(ResourcePackIds) public packs!: string[];
}

export { ResourcePackClientResponse };
