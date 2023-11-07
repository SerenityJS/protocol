import { VarInt, Long, Packet, Serialize } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x11, VarInt)
class TakeItemEntity extends Encapsulated {
	@Serialize(Long) public itemRuntimeEntityId!: number;
	@Serialize(Long) public runtimeEntityId!: number;
}

export { TakeItemEntity };
