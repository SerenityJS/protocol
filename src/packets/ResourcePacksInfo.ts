import { Packet, Serialize, VarInt, Bool } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';
import type { BehaviorPack, ResourcePack, PackLink } from '../types';
import { BehaviorPackInfo, ResourcePackInfo, PackLinks } from '../types';

@Packet(0x06, VarInt)
class ResourcePacksInfo extends Encapsulated {
	@Serialize(Bool) public mustAccept!: boolean;
	@Serialize(Bool) public hasScripts!: boolean;
	@Serialize(Bool) public forceAccept!: boolean;
	@Serialize(BehaviorPackInfo) public behaviorPacks!: BehaviorPack[];
	@Serialize(ResourcePackInfo) public resourcePacks!: ResourcePack[];
	@Serialize(PackLinks) public packLinks!: PackLink[];
}

export { ResourcePacksInfo };
