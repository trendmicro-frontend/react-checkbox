import cx from 'classnames';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import chainedFunction from 'chained-function';
import styles from './index.styl';

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
        defaultIndeterminate: PropTypes.bool
    };

    static defaultProps = {
        disabled: false,
        defaultIndeterminate: false
    };

    checkbox = null;

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

    actions = {
        onChange: () => {
            if (typeof (this.props.indeterminate) !== 'undefined') {
                this.checkbox.indeterminate = this.props.indeterminate;
            }
        }
    }

    render() {
        const {
            label,
            inputClassName,
            inputStyle,
            disabled,
            defaultIndeterminate,

            // Default props
            className,
            style,
            children,
            ...props
        } = this.props;

        const onChange = props.onChange || function() {};
        delete props.onChange;
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
                    onChange={chainedFunction(
                        this.actions.onChange,
                        onChange
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
