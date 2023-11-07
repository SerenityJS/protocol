import { Packet, Serialize, VarInt, Int32 } from '@serenityjs/raknet.js';
import { Encapsulated } from '../Encapsulated';
import { LoginTokens, Tokens } from '../types';

@Packet(0x01, VarInt)
class Login extends Encapsulated {
	@Serialize(Int32) public protocol!: number;
	@Serialize(LoginTokens) public tokens!: Tokens;
}

export { Login };
