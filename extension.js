/**
 * GNOME Shell extension to hide the Activities button from the status bar.
 *
 * Created by Shay Elkin <shay@shayel.org>
 *
 * Updated by zeten30@gmail.com
 * Updated by nathan.townshend@calytrix.com
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 **/

import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

export default class HideActivitiesExtension extends Extension
{
	monitorsChangedEvent = null;

	getIndicator = () => Main.panel.statusArea['activities'];

	enable()
	{
		this.monitorsChangedEvent = Main.layoutManager.connect( 'monitors-changed', () => this.getIndicator()?.hide() );
		this.getIndicator()?.hide();
	}

	disable()
	{
		Main.layoutManager.disconnect( this.monitorsChangedEvent );
		this.getIndicator()?.show();
	}
}
