import { Endianness } from '@serenityjs/binarystream';
import { Packet, Serialize, VarInt, Bool, Float32 } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';

@Packet(0x3d, VarInt)
class ChangeDimension extends Encapsulated {
	@Serialize(VarInt) public dimension!: number;
	@Serialize(Float32, Endianness.Little) public x!: number;
	@Serialize(Float32, Endianness.Little) public y!: number;
	@Serialize(Float32, Endianness.Little) public z!: number;
	@Serialize(Bool) public respawn!: boolean;
}

export { ChangeDimension };
