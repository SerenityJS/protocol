import { Packet, Serialize, VarInt, Bool, BigString } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';
import type { PackIdVersion, Experiment } from '../types';
import { PackIdVersions, Experiments } from '../types';

@Packet(0x07, VarInt)
class ResourcePackStack extends Encapsulated {
	@Serialize(Bool) public mustAccept!: boolean;
	@Serialize(PackIdVersions) public behaviorPacks!: PackIdVersion[];
	@Serialize(PackIdVersions) public resourcePacks!: PackIdVersion[];
	@Serialize(BigString) public gameVersion!: string;
	@Serialize(Experiments) public experiments!: Experiment[];
	@Serialize(Bool) public experimentsPreviouslyToggled!: boolean;
}

export { ResourcePackStack };
