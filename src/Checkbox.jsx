import cx from 'classnames';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import chainedFunction from 'chained-function';
import styles from './index.styl';

const noop = () => {};

class Checkbox extends PureComponent {
    static propTypes = {
        label: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.node
        ]),
        inputClassName: PropTypes.object,
        inputStyle: PropTypes.object,
        disabled: PropTypes.bool,
        checked: PropTypes.bool,
        defaultChecked: PropTypes.bool,
        indeterminate: PropTypes.bool,
        defaultIndeterminate: PropTypes.bool,
        onChange: PropTypes.func,
        onClick: PropTypes.func
    };

    static defaultProps = {
        disabled: false,
        defaultIndeterminate: false
    };

    checkbox = null;

    updateIndeterminateState = () => {
        if (typeof (this.props.indeterminate) !== 'undefined') {
            this.checkbox.indeterminate = !!this.props.indeterminate;
        }
    };

    get checked() {
        if (!this.checkbox) {
            return null;
        }
        return this.checkbox.checked;
    }

    get indeterminate() {
        if (!this.checkbox) {
            return null;
        }
        return this.checkbox.indeterminate;
    }

    render() {
        const {
            label,
            inputClassName,
            inputStyle,
            disabled,
            defaultIndeterminate,
            onChange = noop,
            onClick = noop,

            // Default props
            className,
            style,
            children,
            ...props
        } = this.props;

        delete props.indeterminate;

        return (
            <label
                className={cx(
                    className,
                    styles.controlCheckbox,
                    { [styles.disabled]: disabled }
                )}
                style={style}
            >
                <input
                    {...props}
                    ref={node => {
                        this.checkbox = node;
                        const indeterminate = (typeof (this.props.indeterminate) !== 'undefined') ? this.props.indeterminate : defaultIndeterminate;
                        node && (this.checkbox.indeterminate = indeterminate);
                    }}
                    type="checkbox"
                    disabled={disabled}
                    className={cx(
                        inputClassName,
                        styles.inputCheckbox
                    )}
                    style={inputStyle}
                    onChange={onChange}
                    onClick={chainedFunction(
                        this.updateIndeterminateState,
                        onClick
                    )}
                />
                <i className={styles.controlIndicator} />
                {label ? <span className={styles.textLabel}>{label}</span> : null}
                {children}
            </label>
        );
    }
}

export default Checkbox;
