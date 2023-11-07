import { Packet, Serialize, VarInt, Long } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x49, VarInt)
class Camera extends Encapsulated {
	@Serialize(Long) public cameraUniqueEntityId!: number;
	@Serialize(Long) public playerUniqueEntityId!: number;
}

export { Camera };
